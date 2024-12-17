
// O simbolo de ? simboliza que a informação é OPCIONAL
export default interface Usuario {
   id?: number;
   nome: string;
   email: string;
   senha?: string;
}