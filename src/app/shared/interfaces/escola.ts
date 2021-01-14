import { ITurma } from './turma';

export interface IEscola {
	cod: string;
	nomeEscola: string;
	matricula: string;
	nomeReitor: string;
	tel: string;
	email: string;
	endereco: {
		rua: string
		bairro: string
		numero: string
		complemento: string
	};
	turmas: ITurma[];
}
