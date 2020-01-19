import {DefaultCrudRepository} from '@loopback/repository';
import {Transaction, TransactionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.id,
  TransactionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
