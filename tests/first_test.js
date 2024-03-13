import { Selector } from 'testcafe';

fixture('LucaNet')
    .page('https://www.lucanet.com');

test('Submit a form', async t => {
    await t
        // automatically dismiss dialog boxes
        .setNativeDialogHandler(() => true)
        .click(Selector('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'))
});