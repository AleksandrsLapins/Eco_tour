const calculateAvgRating = reviews => {
    const TotalRating = reviews?.reduce((acc, item) => acc + item.rating, 0 )
    const avgRating = 
    TotalRating === 0 
    ? '' : 
    TotalRating ===1
    ? TotalRating 
    : (TotalRating / reviews?.length).toFixed(1);

    return {
        TotalRating,
        avgRating
    }
}

export default calculateAvgRating