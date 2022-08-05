import Ajv from "ajv";// Importanto referencias ajv
const ajv = new Ajv(// Instancia do Ajv
    {
        allErrors: true,
        verbose: true
    });

export const validateSchema = (jsonSchema, body) => { // Criando função

    cy.fixture('contractSchema', jsonSchema).then((schema) => { // Arquivo de referencia para comparação de contrato

        const validate = ajv.compile(schema) // Criando variável Ajv de compilação
        const valid = validate(body) // Validando o body em comparação com o schema compilado

        if (!valid) { // Essa condição exibe erro caso o contrato seja alterado
            cy.log(validate.errors)
                .then(() => {
                    throw new Error('Falha no contrato');
                })
        } else { // Condição só retorna com sucesso na validação
            Cypress.log(
                {
                    name: 'validateSchema', // Nome da asserção 
                    displayName: 'Teste de Contrato', // Nome que será exibido dentro do Cypress
                    message: `${jsonSchema} validado com sucesso` // Mensagem amigável
                }
            );
        }
    })
}