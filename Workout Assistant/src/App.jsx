import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RepTracker from './pages/RepTracker.jsx'
import WorkoutCreator from './pages/WorkoutCreator.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<RepTracker />} />
          <Route path="/workout-creator" element={<WorkoutCreator />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}