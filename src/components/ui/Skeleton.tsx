"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-border/50",
        className
      )}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-12 w-full max-w-md" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-20 w-full max-w-lg" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32 rounded-xl" />
            <Skeleton className="h-12 w-40 rounded-xl" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Skeleton className="w-72 h-72 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <Skeleton className="h-10 w-32 mx-auto" />
          <Skeleton className="h-4 w-40 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <Skeleton className="w-full aspect-square rounded-2xl" />
          </div>
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-3 gap-5">
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
            </div>
            <Skeleton className="h-20" />
            <div className="space-y-3">
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
              <Skeleton className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <Skeleton className="h-10 w-32 mx-auto" />
          <Skeleton className="h-4 w-40 mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-16 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResearchSkeleton() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <Skeleton className="h-10 w-32 mx-auto" />
          <Skeleton className="h-4 w-40 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
