
// Interface da informação
export interface Task {
   _id: string;
   title: string;
   description?: string;
   done?: boolean;
   createdAt?: Date;
   updateAt?: Date;
}

// Para ser usado no TaskForm, pois deu erro por causa do id
export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updateAt'>

// Colocado novos campos pros campos automaticos do MONGODB