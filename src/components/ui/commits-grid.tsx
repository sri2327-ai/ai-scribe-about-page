
"use client";

import React, { useEffect, useState } from "react";
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
  
  // Define the three green shades for alternation
  const greenShades = ["#48d55d", "#016d32", "#0d4429"];
  
  // Initialize the grid with the full text pattern
  useEffect(() => {
    const fullWordGrid = generateFullWordPattern(text, gridSize);
    setGrid(fullWordGrid);
  }, [text, gridSize]);
  
  // Random cell activation for ambient animation
  useEffect(() => {
    if (animationIntensity <= 0) return;
    
    const interval = 100 / Math.max(0.2, animationIntensity);
    const timer = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid.map(row => [...row])];
        const row = Math.floor(Math.random() * gridSize.rows);
        const col = Math.floor(Math.random() * gridSize.cols);
        // Only change inactive cells occasionally to preserve the word pattern
        if (!newGrid[row][col]) {
          newGrid[row][col] = Math.random() < 0.2;
        } else if (Math.random() < 0.05) { // Very low chance to deactivate a pattern cell
          newGrid[row][col] = false;
        }
        return newGrid;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [animationIntensity, gridSize]);

  // Function to determine which green shade to use based on cell position
  const getCellColor = (rowIndex: number, colIndex: number) => {
    const cellIndex = (rowIndex + colIndex) % 3;
    return greenShades[cellIndex];
  };
  
  return (
    <div className={`commits-grid w-full max-w-xl ${colorScheme.bg} border ${colorScheme.border} grid p-1.5 sm:p-3 gap-0.5 sm:gap-1 rounded-[10px] sm:rounded-[15px]`}
      style={{
        gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
        transition: "all 0.3s ease",
      }}
    >
      {grid.length > 0 &&
        grid.flat().map((isActive, i) => {
          const rowIndex = Math.floor(i / gridSize.cols);
          const colIndex = i % gridSize.cols;
          const activeColor = isActive ? getCellColor(rowIndex, colIndex) : "rgba(31, 41, 55, 0.7)";
          
          return (
            <motion.div
              key={i}
              className={`aspect-square rounded-sm sm:rounded transition-colors duration-300 ${
                isActive ? colorScheme.activeBg : colorScheme.inactiveBg
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                backgroundColor: activeColor
              }}
              transition={{ 
                duration: 0.3, 
                delay: i * 0.001 * (animationIntensity > 0 ? 1 : 0)
              }}
              whileHover={{ scale: 1.2, backgroundColor: "#016d32" }}
            />
          );
        })}
    </div>
  );
};

// Helper function to generate a grid pattern for the full word
function generateFullWordPattern(text: string, gridSize: { rows: number; cols: number }) {
  const { rows, cols } = gridSize;
  const grid = Array(rows).fill(0).map(() => Array(cols).fill(false));
  const characters = text.split("");
  
  // Define clear patterns for each letter
  const patterns: Record<string, number[][]> = {
    S: [
      [1,1,1],
      [1,0,0],
      [1,1,1],
      [0,0,1],
      [1,1,1],
    ],
    '1': [
      [0,1,0],
      [1,1,0],
      [0,1,0],
      [0,1,0],
      [1,1,1],
    ],
    '0': [
      [1,1,1],
      [1,0,1],
      [1,0,1],
      [1,0,1],
      [1,1,1],
    ],
    A: [
      [1,1,1],
      [1,0,1],
      [1,1,1],
      [1,0,1],
      [1,0,1],
    ],
    I: [
      [1,1,1],
      [0,1,0],
      [0,1,0],
      [0,1,0],
      [1,1,1],
    ],
    '.': [
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,1,0],
    ],
    DEFAULT: [
      [1,1,1],
      [1,0,1],
      [1,0,1],
      [1,0,1],
      [1,1,1],
    ]
  };
  
  // Calculate space needed for each character and spacing
  const charWidth = 3; // Width of each character pattern
  const spacing = 1; // Space between characters
  const totalCharsWidth = characters.length * charWidth + (characters.length - 1) * spacing;
  
  // Calculate starting position to center the word
  const startRow = Math.floor((rows - 5) / 2); // Assuming character height is 5
  const startCol = Math.floor((cols - totalCharsWidth) / 2);
  
  // Place each character side by side
  characters.forEach((char, charIndex) => {
    const pattern = patterns[char.toUpperCase()] || patterns.DEFAULT;
    
    // Calculate position for this character
    const charStartCol = startCol + charIndex * (charWidth + spacing);
    
    // Place this character's pattern
    for (let r = 0; r < pattern.length; r++) {
      for (let c = 0; c < pattern[0].length; c++) {
        if (
          startRow + r >= 0 && 
          startRow + r < rows && 
          charStartCol + c >= 0 && 
          charStartCol + c < cols
        ) {
          grid[startRow + r][charStartCol + c] = !!pattern[r][c];
        }
      }
    }
  });
  
  // Add fewer random active cells for a cleaner appearance
  const totalCells = rows * cols;
  const numRandomCells = Math.floor(totalCells * 0.01); // Only 1% random noise
  
  for (let i = 0; i < numRandomCells; i++) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);
    // Avoid overwriting the pattern
    if (!grid[randomRow][randomCol]) {
      grid[randomRow][randomCol] = Math.random() > 0.8;
    }
  }
  
  return grid;
}
