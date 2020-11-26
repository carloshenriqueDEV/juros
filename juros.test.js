const juros = require('./juros');

test("Capital 100, taxa 0.02, tempo 3 meses", () => {
  expect(juros.jurosSimples(100, 0.02, 3)).toBe(6);
})

test("Montante juros simples, passando Capital 100, taxa 0.02, 12 meses", () => {
  const jurosSimples = jest.fn()
  jurosSimples.mockImplementation(() => 6)
  const montanteSimples = juros.pure.montanteJurosSimples({ jurosSimples })
  const montante = montanteSimples(100, 0.02, 12)

  expect(jurosSimples.mock.calls[0]).toEqual([100, 0.02, 12])
  expect(montante).toBe(106.00)
})


test("Montante de juros compostos, passando 100, taxa 0.03, 2 meses", () => {
  expect(juros.montanteJurosCompostos(100, 0.03, 2)).toBe(106.09)
})

test("Juros compostos, passando 100,taxa 0.03,2 meses", () => {
  const montanteJurosCompostos = jest.fn()
  montanteJurosCompostos.mockImplementation(() => 106.09)

  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
  const jurosCalc = jurosCompostos(100, 0.03, 2)

  expect(montanteJurosCompostos.mock.calls[0]).toEqual([100, 0.03, 2])
  expect(jurosCalc).toBe(6.09)


})