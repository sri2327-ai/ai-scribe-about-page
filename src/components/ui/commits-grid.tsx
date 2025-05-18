
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface CommitsGridProps {
  text?: string;
  gridSize?: { rows: number; cols: number };
  colorScheme?: {
    bg: string;
    border: string;
    activeBg: string;
    activeText: string;
    inactiveBg: string;
    inactiveText: string;
  };
  animationIntensity?: number;
}

export const CommitsGrid = ({
  text = "LOVABLE",
  gridSize = { rows: 7, cols: 20 },
  colorScheme = {
    bg: "bg-gray-900",
    border: "border-gray-700",
    activeBg: "bg-teal-500/30 dark:bg-teal-500/20",
    activeText: "text-white",
    inactiveBg: "bg-gray-800 dark:bg-gray-800/70",
    inactiveText: "text-gray-500",
  },
  animationIntensity = 1,
}: CommitsGridProps) => {
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const characters = text.split("");
  
  // Generate grid pattern for each letter
  const letterPatterns = characters.map((char) => generatePatternForLetter(char.toUpperCase(), gridSize));
  
  // Initialize the grid
  useEffect(() => {
    setGrid(letterPatterns[0]);
  }, []);
  
  // Update active letter over time
  useEffect(() => {
    if (animationIntensity <= 0) return;
    
    const speed = 3000 / Math.max(0.5, animationIntensity); // Faster with higher intensity
    const timer = setInterval(() => {
      setActiveLetterIndex((prev) => (prev + 1) % characters.length);
    }, speed);
    
    return () => clearInterval(timer);
  }, [characters.length, animationIntensity]);
  
  // Update grid when active letter changes
  useEffect(() => {
    if (letterPatterns[activeLetterIndex]) {
      setGrid(letterPatterns[activeLetterIndex]);
    }
  }, [activeLetterIndex]);
  
  // Random cell activation for ambient animation
  useEffect(() => {
    if (animationIntensity <= 0) return;
    
    const interval = 100 / Math.max(0.2, animationIntensity);
    const timer = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid.map(row => [...row])];
        const row = Math.floor(Math.random() * gridSize.rows);
        const col = Math.floor(Math.random() * gridSize.cols);
        newGrid[row][col] = !newGrid[row][col];
        return newGrid;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [animationIntensity]);
  
  return (
    <div className={`commits-grid w-full max-w-xl ${colorScheme.bg} border ${colorScheme.border} grid p-1.5 sm:p-3 gap-0.5 sm:gap-1 rounded-[10px] sm:rounded-[15px]`}
      style={{
        gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
        transition: "all 0.3s ease",
      }}
    >
      {grid.length > 0 &&
        grid.flat().map((isActive, i) => (
          <motion.div
            key={i}
            className={`aspect-square rounded-sm sm:rounded transition-colors duration-300 ${
              isActive ? colorScheme.activeBg : colorScheme.inactiveBg
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              backgroundColor: isActive ? "rgba(20, 184, 166, 0.3)" : "rgba(31, 41, 55, 0.7)"
            }}
            transition={{ 
              duration: 0.3, 
              delay: i * 0.001 * (animationIntensity > 0 ? 1 : 0)
            }}
            whileHover={{ scale: 1.2, backgroundColor: "rgba(20, 184, 166, 0.8)" }}
          />
        ))}
    </div>
  );
};

// Helper function to generate grid pattern for a letter
function generatePatternForLetter(letter: string, gridSize: { rows: number; cols: number }) {
  const { rows, cols } = gridSize;
  const grid = Array(rows).fill(0).map(() => Array(cols).fill(false));
  
  const patterns: Record<string, number[][]> = {
    S: [[1,1,1], [1,0,0], [1,1,1], [0,0,1], [1,1,1]],
    '1': [[0,1,0], [1,1,0], [0,1,0], [0,1,0], [1,1,1]],
    '0': [[1,1,1], [1,0,1], [1,0,1], [1,0,1], [1,1,1]],
    A: [[1,1,1], [1,0,1], [1,1,1], [1,0,1], [1,0,1]],
    I: [[1,1,1], [0,1,0], [0,1,0], [0,1,0], [1,1,1]],
    L: [[1,0,0], [1,0,0], [1,0,0], [1,0,0], [1,1,1]],
    O: [[1,1,1], [1,0,1], [1,0,1], [1,0,1], [1,1,1]],
    V: [[1,0,1], [1,0,1], [1,0,1], [1,0,1], [0,1,0]],
    B: [[1,1,0], [1,0,1], [1,1,0], [1,0,1], [1,1,0]],
    E: [[1,1,1], [1,0,0], [1,1,0], [1,0,0], [1,1,1]],
    // Default pattern for unsupported characters
    DEFAULT: [[0,1,0], [1,0,1], [1,1,1], [1,0,1], [1,0,1]]
  };
  
  // Get pattern for this letter or use default
  const pattern = patterns[letter] || patterns.DEFAULT;
  
  // Calculate center placement
  const patternRows = pattern.length;
  const patternCols = pattern[0].length;
  const startRow = Math.floor((rows - patternRows) / 2);
  const startCol = Math.floor((cols - patternCols) / 2);
  
  // Place the pattern in the grid
  for (let r = 0; r < patternRows; r++) {
    for (let c = 0; c < patternCols; c++) {
      if (startRow + r >= 0 && startRow + r < rows && startCol + c >= 0 && startCol + c < cols) {
        grid[startRow + r][startCol + c] = !!pattern[r][c];
      }
    }
  }
  
  // Add random active cells
  const totalCells = rows * cols;
  const numRandomCells = Math.floor(totalCells * 0.1); // 10% of cells will be randomly active
  
  for (let i = 0; i < numRandomCells; i++) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);
    grid[randomRow][randomCol] = true;
  }
  
  return grid;
}
