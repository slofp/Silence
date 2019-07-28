/*

   Copyright 2018 (Fairy)Phy

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0       

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

    Find.js
    Codename: silence
    v 1.0
    Twitter: @Fairy_Phy
    
    Warning: Because it is Japanese Bot,To correspond to the language you are using,Please modify the code yourself.
                ↑google translate :(((((((((((((((

*/

module.exports =
    (client, message, date, who, cmd, args) => {
        try {
            message.delete();
            let id = args.join(` `);
            let member = client.users.find(user => user.id === id);
            message.channel.send(member.username)
                .then(message => console.log(`${who}${cmd}コマンドの実行${date}`))
                .catch(console.error);
        }
        catch (err) {
            console.log(`${cmd}コマンド実行中にエラーが発生しました\n${err}`);
        }
    };