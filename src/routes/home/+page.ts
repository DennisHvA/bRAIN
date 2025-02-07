import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const startDate = new Date();
    const endDate = new Date();

    startDate.setDate(startDate.getDate());
    endDate.setDate(endDate.getDate() + 6);

    const startMonth = startDate.getMonth() + 1;
    const endMonth = endDate.getMonth() + 1;

    const startDateMonth = ('0' + startMonth).slice(-2)
    const endDateMonth = ('0' + endMonth).slice(-2)

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();

    const startDateDay = ('0' + startDay).slice(-2)
    const endDateDay = ('0' + endDay).slice(-2)

    const startDateFormat = startDate.getFullYear() + '-' + startDateMonth + '-' + startDateDay
    const endDateFormat = endDate.getFullYear() + '-' + endDateMonth + '-' + endDateDay

    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&daily=precipitation_sum&forecast_days=3&start_date=${startDateFormat}&end_date=${endDateFormat}&timezone=Europe%2FBerlin`;
    console.log(endpoint)

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
}) satisfies PageLoad;