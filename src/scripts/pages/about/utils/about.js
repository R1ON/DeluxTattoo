import findIndex from 'lodash/findIndex';
import uniq from 'lodash/uniq';

const allStyles = ['classical', 'biomechanics', 'realism', 'watercolor', 'newSchool', 'horror'];
// const stylesObject = allStyles.reduce((acc, element) => ({ ...acc, [element]: '' }), {});

function formatMastersToChart(masterInfo) {
  const test = masterInfo.reduce((info, current) => {
    const styleIndexes = current.images.map(value => findIndex(allStyles.map(style => style === value.style), styleIndex => styleIndex));

    return info.concat({
      id: current.id,
      name: current.name,
      value: current.images.length,
      stylesCount: uniq(styleIndexes).length,
      styles: current.styles
    });
  }, []);

  return test;
}

export {
  formatMastersToChart
};
