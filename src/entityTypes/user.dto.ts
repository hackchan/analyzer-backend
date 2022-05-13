import { IUserModel } from './user.model'

export interface CreateUserDTO extends Omit<IUserModel, 'id'|'createdAt'|'updatedAt'> {
  tipoId: number
}

export interface UpdateUserDTO extends Partial<CreateUserDTO> {

}

export interface ListUsers extends IUserModel {

}

// export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

// export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'tags'>>> {
//   readonly tags: readonly string[]
// }
