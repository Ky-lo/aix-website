'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './TestimonialCarousel.module.css';

interface Testimonial {
  category: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    category: 'Practical, Hands-On Impact',
    quote: 'Hands-on learning translated to immediate use. I can apply what I learned straight away at work.',
  },
  {
    category: 'Practical, Hands-On Impact',
    quote: 'Highly valued Copilot on-site workshop. It helped us draw much better value out of our Copilot license.',
  },
  {
    category: 'Practical, Hands-On Impact',
    quote: 'The workshop changed my mindset. I previously thought Copilot was not applicable to my work, but now I clearly see the possibilities.',
  },
  {
    category: 'Prompt Mastery and Practical Use Cases',
    quote: 'The guidance on how to create good Copilot prompts from scratch and refine them was extremely helpful.',
  },
  {
    category: 'Prompt Mastery and Practical Use Cases',
    quote: 'Very useful and a great kick-start to a journey with Copilot. The hands-on experience and prompt library were especially valuable.',
  },
  {
    category: 'Prompt Mastery and Practical Use Cases',
    quote: 'The instructor helped break down problems into actionable solutions for trying with Copilot. Very practical and easy to understand.',
  },
  {
    category: 'Engaging and Knowledgeable Facilitation',
    quote: 'An engaging session. I gained a lot more knowledge through direct hands-on experience, especially through the trainer\'s personal Copilot prompt tips.',
  },
  {
    category: 'Engaging and Knowledgeable Facilitation',
    quote: 'Real live practical case studies and examples were shared by an experienced and engaging trainer.',
  },
  {
    category: 'Engaging and Knowledgeable Facilitation',
    quote: 'The trainer was very clear and articulate on Copilot and how it can help make our working more efficient.',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Auto-advance every 7 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.card}>
        <div className={styles.category}>
          {testimonials[currentIndex].category.toUpperCase()}
        </div>
        <p className={styles.quote}>
          "{testimonials[currentIndex].quote}"
        </p>
      </div>

      <div className={styles.controls}>
        <button
          onClick={goToPrevious}
          className={styles.arrow}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className={styles.arrow}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
