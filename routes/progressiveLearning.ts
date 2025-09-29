/*
 * Progressive Learning API Route
 * Provides endpoints for progressive learning status and management
 */

import { type Request, type Response } from 'express'
import * as progressiveLearning from '../lib/progressiveLearning'

export function progressiveStatus() {
  return (req: Request, res: Response) => {
    if (!progressiveLearning.isProgressiveModeEnabled()) {
      return res.status(400).json({
        error: 'Progressive learning mode is not enabled'
      })
    }

    const status = progressiveLearning.getProgressiveStatus()
    res.json({
      progressiveLearning: true,
      ...status
    })
  }
}

export function progressiveChallenges() {
  return (req: Request, res: Response) => {
    if (!progressiveLearning.isProgressiveModeEnabled()) {
      return res.status(400).json({
        error: 'Progressive learning mode is not enabled'
      })
    }

    const currentChallenge = progressiveLearning.getCurrentProgressiveChallenge()
    res.json({
      currentChallenge,
      progressiveLearning: true
    })
  }
}