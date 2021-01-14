import { IEscola } from '../interfaces/escola';
const admin: IEscola = {
	id: 'ADMIN',
	nomeEscola: 'Secretaria da Educação',
	matricula: '0000000000000',
	nomeReitor: 'Secretario Da Educação',
	tel: '00000000',
	email: 'secretaria@edu',
	endereco: {
		rua: 'Rua 02',
		bairro: 'Centro da cidade',
		numero: '6',
		complemento: 'Predio da secretaria da educação',
		cidade: 'Palmas',
	},
	turmas: [],
}
export default admin;