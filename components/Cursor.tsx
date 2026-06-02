'use client';

import { useEffect } from 'react';

// 홈 전용 커스텀 커서 — 네이티브 커서 위에 ring 따라오기, mix-blend로 배경 자동 대응
export default function Cursor() {
  useEffect(() => {
    // 터치 디바이스 / reduced-motion 사용자는 비활성
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ring = document.createElement('div');
    ring.className = 'ax-cursor-ring hidden';
    document.body.appendChild(ring);

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let firstMove = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (firstMove) {
        rx = mx;
        ry = my;
        ring.classList.remove('hidden');
        firstMove = false;
      }
    };

    const tick = () => {
      // 스프링 lerp — 0.18 = 부드러운 추적, 너무 멀어지지 않음
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const isInteractive = (el: Element | null): boolean =>
      !!el?.closest('a, button, [role="button"], input, textarea, select, label, summary');

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) ring.classList.add('hover');
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) ring.classList.remove('hover');
    };
    const onDocEnter = () => ring.classList.remove('hidden');
    const onDocLeave = () => ring.classList.add('hidden');

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseenter', onDocEnter);
    document.addEventListener('mouseleave', onDocLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseenter', onDocEnter);
      document.removeEventListener('mouseleave', onDocLeave);
      cancelAnimationFrame(raf);
      ring.remove();
    };
  }, []);

  return null;
}
