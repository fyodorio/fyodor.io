/** Inspired by @gridsome/transformer-remark */

const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g

/**
 * Calculate time to read for a blogpost or any text
 * @param content Stringified text content
 * @param speed Words per minute
 * @returns time to read in minutes 
 */
export const calculateTimeToRead = (content, speed = 200) => {
    const m = content.match(pattern)

    let count = 0

    // Empty string
    if (!m) {
        return 0
    }

    for (const c of m) {
        if (c.charCodeAt(0) >= 0x4e00) {
            count += c.length
        } else {
            count += 1
        }
    }

    return Math.round(count / speed) || 1
} 