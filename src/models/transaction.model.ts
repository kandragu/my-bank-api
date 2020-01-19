import {Entity, model, property} from '@loopback/repository';

@model()
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  account: string;

  @property({
    type: 'string',
    required: true,
  })
  currency: string;

  @property({
    type: 'string',
    required: true,
  })
  action: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
    default: 'empty',
  })
  desc?: string;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
