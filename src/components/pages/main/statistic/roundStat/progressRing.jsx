import React, { useState } from "react"
import s from "./roundStat.module.scss"
import PropTypes from "prop-types"

function ProgressRing({ percent, data }) {
    const [radius] = useState(27)
    const circleStyle = {
        strokeDasharray: "50 20",
        strokeDashoffset: "50",
        transition: "stroke-dashoffset 2s ease 1s",
        stroke: `${data ? data.color : "#000"}`,
        r: radius
    }
    const circumference = 2 * Math.PI * radius
    circleStyle.strokeDasharray = `${circumference} ${circumference}`
    circleStyle.strokeDashoffset = circumference
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference
        circleStyle.strokeDashoffset = offset
    }
    setProgress(percent)

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
    percent: PropTypes.number.isRequired
}

export default ProgressRing
