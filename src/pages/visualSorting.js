import React, { useEffect, useState } from 'react'
import {getMergeSortAnimations} from '../components/algorithms/sorting/mergeSort'
import {getBubbleSortAnimations} from '../components/algorithms/sorting/bubbleSort'
import {getSelectionSortAnimations} from '../components/algorithms/sorting/selectionSort'
import {getInsertionSortAnimations} from '../components/algorithms/sorting/insertionSort'
import {getQuickSortFirstAnimations} from '../components/algorithms/sorting/quickSort'
import {getCocktailSortAnimations} from '../components/algorithms/sorting/cocktailSort'
import {getCombSortAnimations} from '../components/algorithms/sorting/combSort'
import {getShellSortAnimations} from '../components/algorithms/sorting/shellSort'
import {getHeapSortAnimations} from '../components/algorithms/sorting/heapSort'
import BarSlider from '../components/slider/barsSlider'
import SpeedSlider from '../components/slider/speedSlider'
import '../components/styles/sortVisualiser.css'
import { Link } from 'react-router-dom'

function SortVisualiser() {
    const [ar, setAr] = useState([]);
    const [numberBars, setNumberBars] = useState(310);
    const [animationSpeed, setAnimationSpeed] = useState(3);

    const ANIMATION_SPEED_MS = animationSpeed;

    const NUMBER_OF_ARRAY_BARS = numberBars;

    const PRIMARY_COLOR = 'turquoise';

    const SECONDARY_COLOR = 'green';

    useEffect(() => {
        resetArray()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberBars, animationSpeed])

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        setAr(array)
    }

    //Sorting Algorithms
    const mergeSort = () => {
        const animations = getMergeSortAnimations(ar);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    const bubbleSort = () => {
        const animations = getBubbleSortAnimations(ar);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 <= 1;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    const selectionSort = () => {
      const animatingArray = getSelectionSortAnimations(ar);
      for (let i = 0; i < animatingArray.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    const insertionSort = () => {
      const animatingArray = getInsertionSortAnimations(ar);
      for (let i = 0; i < animatingArray.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    const quickSort = () => {
      const animatingArray = getQuickSortFirstAnimations(ar);
      for (let i = 0; i < animatingArray.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    const cocktailSort = () => {
      const animatingArray = getCocktailSortAnimations(ar);
      for (let i = 0; i < animatingArray.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    const combSort = () => {
      const animatingArray = getCombSortAnimations(ar);
        for (let i = 0; i < animatingArray.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const colorChange = i % 4 <= 1;
          if (colorChange) {
            const [barOneIdx, barTwoIdx] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animatingArray[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    const shellSort = () => {
      const animatingArray = getShellSortAnimations(ar);
      for (let i = 0; i < animatingArray.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const colorChange = i % 4 <= 1;
        if (colorChange) {
          const [barOneIdx, barTwoIdx] = animatingArray[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    const heapSort = () => {
      const animatingArray = getHeapSortAnimations(ar);
      const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animatingArray.length; i++) {
          const colorChange = i % 4 <= 1;
          if (colorChange) {
            const [barOneIdx, barTwoIdx] = animatingArray[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animatingArray[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    return (
        <div>
            <Link to="/">
                <h1 className="m-2 text-sky-500 text-lg font-semibold transition duration-400 transition-transform hover:scale-101 ease-in-out hover:text-cyan-700 cursor-pointer">Go Back</h1>
            </Link>
            <div className="toolbar-container">
                <div className="flex ml-10">
                    <SpeedSlider animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed}/>
                    <BarSlider numberBars={numberBars} setNumberBars={setNumberBars}/>
                </div>
                <div className="flex ml-10 mt-2">
                    <button className="text-red-900 transform hover:scale-103 transition duration-200 ease-linear hover:border-red-500 hover:text-red-700 mr-3 shadow-md h-10 pl-2 pr-2 border border-red-800 rounded-lg" onClick={resetArray}>Generate Array</button>
                    <div className="flex">
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={mergeSort}>Merge Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={bubbleSort}>Bubble Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={insertionSort}>Insertion Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={quickSort}>Quick Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={cocktailSort}>Cocktail Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={selectionSort}>Selection Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={combSort}>Comb Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={shellSort}>Shell Sort</button>
                        <button className="transform hover:scale-103 transition duration-200 ease-linear hover:border-cyan-600 hover:text-cyan-500 mr-3 shadow-md h-10 pl-2 pr-2 border border-cyan-800 rounded-lg" onClick={heapSort}>Heap Sort</button>
                    </div>
                </div>
            </div>

            <div className="array-container">
                {ar.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                }}></div>
            ))}
            </div>
        </div>
    )
}

export default SortVisualiser

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
