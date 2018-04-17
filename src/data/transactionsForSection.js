import moment from 'moment';

const createSections = transactions => {
    const transactionsByDays = transactions
        .sort((a, b) => a.date > b.date ? -1 : 1)
        .reduce((obj, t) => {
            const key = moment(t.date).format('YYYY-MM-DD');
            if (!obj[key])
                obj[key] = [];

            obj[key].push(t);
            return obj;
        }, {});

    const sections = Object.keys(transactionsByDays).map(k => ({
        title: k,
        data: transactionsByDays[k]
    }));

    return sections;
}

export default createSections;