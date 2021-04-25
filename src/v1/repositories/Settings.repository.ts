import { Repository, EntityRepository } from 'typeorm';
import { Settings } from '../entities/Settings.entity';

@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {}

export { SettingsRepository };
