const newman = require('newman'); // require newman in your project

class NewmanConfig{

    constructor(root_json_file){
        this.root_json = '..'.concat(root_json_file)
        this.looprun()
    }

    looprun(){
        var root_file = require(this.root_json)
        var run_list = root_file.runs
        console.log("!----------------------------------Files Taken to run---------------------------------------!")
        run_list.forEach(parseAndRun);

        function parseAndRun(value, index) {
            console.log(index)
            console.log(value)
            if (value.environment == undefined) {
                NewmanConfig.runCollection(value.collection)
            } else {
                NewmanConfig.runCollectionWithEnv(value.collection, value.environment)
            }
        }
        console.log("!-------------------------------------------------------------------------------------------!")
    }

    static reporters_list() {
        return ['cli', 'json', 'html', 'allure']
    }

    static allure_report_path() {
        return './reports/allure'
    }

    static newman_json_report_path() {
        return './reports/json/'
    }

    static newman_html_report_path() {
        return './reports/html/'
    }

    static runCollectionWithEnv(collection, environment){
        // call newman.run to pass `options` object and wait for callback
        var file_name = collection.split("/")
        newman.run({
            collection: require(collection),
            environment: require(environment),
            reporters: NewmanConfig.reporters_list(),
            reporter: {
                html: {
                    export: NewmanConfig.newman_html_report_path().concat(file_name[file_name.length - 1]).concat('.html') // If not specified, the file will be written to `newman/` in the current working directory.
                },
                allure: {
                    export: NewmanConfig.allure_report_path()
                },
                json: {
                    export: NewmanConfig.newman_json_report_path().concat(file_name[file_name.length - 1]).concat('.json')
                }
            }
        }, function (err) {
            if (err) { throw err; }
            console.log('collection run complete!');
        });
    }

    static runCollection(collection){
        // call newman.run to pass `options` object and wait for callback
        var file_name = collection.split("/")
        newman.run({
            collection: require(collection),
            reporters: NewmanConfig.reporters_list(),
            reporter: {
                html: {
                    export: NewmanConfig.newman_html_report_path().concat(file_name[file_name.length - 1]).concat('.html') // If not specified, the file will be written to `newman/` in the current working directory.
                },
                allure: {
                    export: NewmanConfig.allure_report_path()
                },
                json: {
                    export: NewmanConfig.newman_json_report_path().concat(file_name[file_name.length - 1]).concat('.json')
                }
            }
        }, function (err) {
            if (err) { throw err; }
            console.log('collection run complete!');
        });

    }

}

module.exports = NewmanConfig