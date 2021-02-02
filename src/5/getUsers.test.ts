import { use, should, expect } from 'chai';
import { createSandbox, SinonSandbox } from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';
import { getUsers } from './getUsers';

should();
use(sinonChai);

describe('Get users', () => {
  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should calls the correct URL', async () => {
    const resolved = new Promise((r) => r({}));
    sandbox.stub(axios, 'get').returns(resolved);
    await getUsers();
    axios.get.should.have.been.calledWith('https://www.mysite.com/api/users');
  });

  it('should return correct data', async () => {
    const resolved = new Promise((r) => r({ users: ['user1', 'user2'] }));
    sandbox.stub(axios, 'get').returns(resolved);
    const users = await getUsers();
    expect(users).to.deep.equal({ users: ['user1', 'user2'] });
  });
});
