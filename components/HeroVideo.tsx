"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/media/paribus-architectural-hero.mp4";
const POSTER_SRC = "/media/paribus-architectural-hero-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = true;

    const syncPlayback = () => {
      if (reducedMotion.matches || document.hidden || !inView) {
        video.pause();
        return;
      }
      void video.play().catch(() => {
        // The poster remains visible if autoplay is unavailable.
      });
    };

    const softenLoop = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const remaining = video.duration - video.currentTime;
      if (remaining < 0.72) video.dataset.loopTransition = "out";
      if (video.currentTime < 0.35) video.dataset.loopTransition = "in";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.05 },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    video.addEventListener("timeupdate", softenLoop);
    syncPlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      video.removeEventListener("timeupdate", softenLoop);
    };
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_SRC}
        tabIndex={-1}
      >
        <source
          src={VIDEO_SRC}
          type="video/mp4"
          media="(prefers-reduced-motion: no-preference)"
        />
      </video>
    </div>
  );
}
