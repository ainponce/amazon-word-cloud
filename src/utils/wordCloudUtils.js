const generateWordCloudData = (data) => {
    const config = {
        type: 'wordCloud',
        data: {
            labels: data.map(([word, count]) => word),
            datasets: [
                {
                    label: 'DS',
                    data: data.map(([word, count]) => count * 5)
                },
            ],
        },
        options: {},
    }

    return config;
};

export default { generateWordCloudData };