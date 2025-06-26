"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
  const [number, setNumber] = useState(0);
  const [numberColor, setNumberColor] = useState("text-blue-500");
  const [numberSize, setNumberSize] = useState("text-1xl");

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-orange-500",
    "text-teal-500",
    "text-cyan-500",
  ];

  const text_sizes = [
    "text-1xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
  ];

  function getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex] || "text-blue-500"; // makes sure it returns something.
  }

  function getRandomSize(): string {
    const randomColour = Math.floor(Math.random() * text_sizes.length);
    return text_sizes[randomColour] || "text-1xl";
  }

  function increaseNumber() {
    setNumber(number + 1);
    setNumberColor(getRandomColor());
    setNumberSize(getRandomSize());
  }

  function decreaseNumber() {
    setNumber(number - 1);
    setNumberColor(getRandomColor());
    setNumberSize(getRandomSize());
  }

  function randomNumberChange() {
    setNumber(Math.floor((number - (number - 1)) * Math.random() * 100));
  }
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center text-9xl font-bold">
        <p className={`block ${numberColor} ${numberSize} mb-10 animate-spin`}>
          {number}
        </p>
        <div className="flex gap-4">
          <Button
            className="h-20 w-20 bg-green-600 text-5xl hover:bg-green-400"
            onClick={increaseNumber}
          >
            +
          </Button>
          <Button
            className="h-20 w-20 bg-red-600 text-5xl hover:bg-red-400"
            onClick={decreaseNumber}
          >
            -
          </Button>
        </div>
        <Button
          className="m-3 w-45 bg-blue-800 hover:bg-blue-500"
          onClick={randomNumberChange}
        >
          Funny Number time
        </Button>
      </div>
    </div>
  );
}
