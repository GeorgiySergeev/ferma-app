'use client';

import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    // Remove Grammarly attributes after mount
    const body = document.querySelector('body');
    if (body) {
      body.removeAttribute('data-new-gr-c-s-check-loaded');
      body.removeAttribute('data-gr-ext-installed');
    }
  }, []); // Empty dependency array means this runs once on mount

  return null;
}
