const getNextDay = (dt, qty) => {
  const transformDt = new Date(
    dt * 1000 + 24 * 60 * 60 * 1000 * qty
  ).toLocaleString('es-ES');
  const fragment = transformDt.split('/');
  const nextDay =
    fragment[2].slice(0, 4) +
    '-' +
    (fragment[1] < 10 ? '0' + fragment[1] : fragment[1]) +
    '-' +
    (fragment[0] < 10 ? '0' + fragment[0] : fragment[0]) +
    ' ' +
    fragment[2].slice(6, 14);
  return nextDay;
};

export const getFormatedNextDay = (dt, day) => {
  const dateOnly = getNextDay(dt, day).slice(0, 10);
  const fragments = dateOnly.split('-');
  return fragments[2] + '/' + fragments[1] + '/' + fragments[0];
};

export const getForecastDescription = (list, dt, day, index) => {
    const dayFilter = list.filter((fore) => {
      return fore.dt_txt.slice(0, 10) === getNextDay(dt, day).slice(0, 10);
    });
    
    const description = dayFilter[index].weather[0].main;
    return description;
  };

export const getForecastTempMin = (list, dt, day) => {
    const dayFilter = list.filter((fore) => {
      return fore.dt_txt.slice(0, 10) === getNextDay(dt, day).slice(0, 10);
    });
    const tempMin = Math.round(
      dayFilter.reduce((acc, tm) => acc + tm.main.temp_min, 0) / dayFilter.length
    );
    return tempMin;
  };

export const getForecastTempMax = (list, dt, day) => {
    const dayFilter = list.filter((fore) => {
      return fore.dt_txt.slice(0, 10) === getNextDay(dt, day).slice(0, 10);
    });
    const tempMax = Math.round(
      dayFilter.reduce((acc, tm) => acc + tm.main.temp_max, 0) / dayFilter.length
    );
    return tempMax;
  };
