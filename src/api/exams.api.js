const GET_LIST_URL = '/tests';

export const fetchExamsList = (offset = 0, limit = 20) => {
  return new Promise((resolve, reject) => (setTimeout(() => {
    resolve(
      {
        status: 200,
        json: () => {
          return {
            data: [
              {
                id: 1,
                title: 'EXAM. How To Take The Headache Out Of TITLE',
                short: 'С другой стороны дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.'
              },
              {
                id: 2,
                title: 'EXAM. 3 Ways Twitter Destroyed My TITLE Without Me Noticing',
                short: 'С другой стороны дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.'
              },
              {
                id: 3,
                title: 'EXAM. To People That Want To Start TITLE But Are Affraid To Get Started',
                short: 'С другой стороны дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.'
              },
              {
                id: 4,
                title: 'EXAM. Boost Your TITLE With These Tips',
                short: 'С другой стороны дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.'
              },
              {
                id: 5,
                title: 'EXAM. How To Turn Your TITLE From Zero To Hero',
                short: 'С другой стороны дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.'
              },
            ]
          };
        }
      });
  }
  ), 1000));

  let page = Math.trunc(offset / limit) + 1;
  return fetch(process.env.REACT_APP_API_URL + GET_LIST_URL
    + '?' + (new URLSearchParams({
      page,
      perPage: limit
    })).toString())
}