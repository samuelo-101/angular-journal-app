import { JournalRoutingModule } from './journal-routing.module';

describe('JournalRoutingModule', () => {
  let journalRoutingModule: JournalRoutingModule;

  beforeEach(() => {
    journalRoutingModule = new JournalRoutingModule();
  });

  it('should create an instance', () => {
    expect(journalRoutingModule).toBeTruthy();
  });
});
