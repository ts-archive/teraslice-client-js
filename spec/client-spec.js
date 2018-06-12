'use strict';

const client = require('../');
const nock = require('nock');

describe('teraslice-client-js', () => {
    it('returns a function', () => {
        expect(typeof client).toEqual('function');
    });

    it('should not throw an error if constructed with nothing', () => {
        expect(() => client()).not.toThrow();
    });

    describe('->jobs', () => {
        let jobs;

        beforeEach(() => {
            ({ jobs } = client({
                host: 'teraslice.example.com'
            }));
            nock('teraslice.example.com');
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should have the method submit', () => {
            expect(typeof jobs.submit).toEqual('function');
        });

        it('should have the method list', () => {
            expect(typeof jobs.list).toEqual('function');
        });

        it('should have the method wrap', () => {
            expect(typeof jobs.wrap).toEqual('function');
        });
    });
});
