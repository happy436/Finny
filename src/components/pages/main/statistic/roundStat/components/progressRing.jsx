import React, { useState } from "react"
import s from "../roundStat.module.css"
import PropTypes from "prop-types"

function ProgressRing({ percent, data, active }) {
    const [radius] = useState(27)
    const circleStyle = {
        strokeDasharray: "50 20",
        strokeDashoffset: "50",
        transition: "stroke-dashoffset 1s ease .3s",
        stroke: `${data ? data.color : "#000"}`,
        r: radius
    }
    const circumference = 2 * Math.PI * radius
    circleStyle.strokeDasharray = `${circumference} ${circumference}`
    circleStyle.strokeDashoffset = circumference
    const offset = circumference - percent / 100 * circumference
    circleStyle.strokeDashoffset = !active ? circumference : offset

    return (
        <svg
            className={s.progress_ring}
        >
            <circle
                className={s.circle}
                style={circleStyle}
            />
        </svg>
    )
}

ProgressRing.propTypes = {
    data: PropTypes.object,
    percent: PropTypes.number.isRequired,
    active: PropTypes.bool
}

export default ProgressRing
