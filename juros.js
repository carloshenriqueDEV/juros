// const Math = require('Math');
const jurosSimples = (capital, taxa, tempo) => capital * taxa * tempo;

const montanteJurosSimples = ({ jurosSimples }) => (capital, taxa, tempo) => {
  const montante = capital + jurosSimples(capital, taxa, tempo);
  return montante;
};

const jurosCompostos = ({ montanteJurosCompostos }) => (capital, taxa, tempo) => {
  const jurosCompostos = montanteJurosCompostos(capital, taxa, tempo);
  return parseFloat((jurosCompostos - capital).toFixed(2));
};

const montanteJurosCompostos = (capital, taxa, tempo) => {
  return parseFloat((capital * Math.pow((1 + taxa), tempo)).toFixed(2));
};

module.exports = {
  jurosSimples,
  montanteJurosSimples: montanteJurosSimples({ jurosSimples }),
  montanteJurosCompostos,
  jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
  pure: {
    montanteJurosSimples,
    jurosCompostos
  }
}