/*
 * Copyright (c) 2014-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import os from 'node:os'

import * as challengeUtils from '../lib/challengeUtils'
import { challenges } from '../data/datacache'

export function getServerInfo () {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get network interfaces
      const networkInterfaces = os.networkInterfaces()
      const ipAddresses: Array<{ interface: string, address: string, family: string, internal: boolean }> = []

      // Extract IP addresses from network interfaces
      for (const [name, interfaces] of Object.entries(networkInterfaces)) {
        if (interfaces) {
          for (const iface of interfaces) {
            ipAddresses.push({
              interface: name,
              address: iface.address,
              family: iface.family,
              internal: iface.internal
            })
          }
        }
      }

      // Solve the challenge when this endpoint is accessed
      challengeUtils.solveIf(challenges.serverIpDiscoveryChallenge, () => { return true })

      // Return server information including IP addresses
      res.status(200).json({
        status: 'success',
        data: {
          hostname: os.hostname(),
          platform: os.platform(),
          type: os.type(),
          release: os.release(),
          uptime: os.uptime(),
          networkInterfaces: ipAddresses,
          totalMemory: os.totalmem(),
          freeMemory: os.freemem(),
          cpus: os.cpus().length
        }
      })
    } catch (error) {
      next(error)
    }
  }
}
