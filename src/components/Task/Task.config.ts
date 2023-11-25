export const DAY_IN_MILLISECOND = (1000 * 60 * 60 * 24);
export const HOUR_IN_MILLISECOND = (1000 * 60 * 60);
export const MINUTE_IN_MILLISECOND = (1000 * 60);

export const formatTimeLeft = (time_difference: number, completed: boolean) => {
    const days_difference = time_difference / DAY_IN_MILLISECOND;
    const hours_difference = time_difference / HOUR_IN_MILLISECOND;
    const minute_difference = time_difference / MINUTE_IN_MILLISECOND;

    if (completed) {
        return {
            timeLeft: 'Done',
            timeClassName: 'good'
        }
    } else if (time_difference < 1) {
        return {
            timeLeft: 'Overdue',
            timeClassName: 'urgent'
        }
    }

    if (days_difference > 1) {
        return {
            timeLeft: `${Math.floor(days_difference)} D left`,
            timeClassName: "good",
        };
    } else if (hours_difference < 1) {
        return {
            timeLeft: `${Math.floor(minute_difference)} M left`,
            timeClassName: "urgent",
        };
    } else {
        return {
            timeLeft: `${Math.floor(hours_difference)} H left`,
            timeClassName: "near",
        };
    }
};
