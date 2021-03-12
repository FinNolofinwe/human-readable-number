module.exports = function toReadable (number) {
    var read = String(number),
        readable = [];
    for (let i = 0; i < read.length; i++) {
        if ( read.length == 3 ) {
            switch (read[0]) {
                        case '1':
                            readable[0] = 'one hundred';
                            break;
                        case '2':
                            readable[0] = 'two hundred';
                            break;
                        case '3':
                            readable[0] = 'three hundred';
                            break;
                        case '4':
                            readable[0] = 'four hundred';
                            break;
                        case '5':
                            readable[0] = 'five hundred';
                            break;
                        case '6':
                            readable[0] = 'six hundred';
                            break;
                        case '7':
                            readable[0] = 'seven hundred';
                            break;
                        case '8':
                            readable[0] = 'eight hundred';
                            break;
                        case '9':
                            readable[0] = 'nine hundred';
                            break;
            }
            if ( read[1] == 1) {
                switch (read[2]) {
                    case '1':
                        readable[1] = ' eleven';
                        break;
                    case '2':
                        readable[1] = ' twelve';
                        break;
                    case '3':
                        readable[1] = ' thirteen';
                        break;
                    case '4':
                        readable[1] = ' fourteen';
                        break;
                    case '5':
                        readable[1] = ' fifteen';
                        break;
                    case '6':
                        readable[1] = ' sixteen';
                        break;
                    case '7':
                        readable[1] = ' seventeen';
                        break;
                    case '8':
                        readable[1] = ' eighteen';
                        break;
                    case '9':
                        readable[1] = ' nineteen';
                        break;
                    case '0':
                        readable[1] = ' ten';
                        break;
                }                  
            } else {
                switch (read[1]) {
                    case '2':
                        readable[1] = ' twenty';
                        break;
                    case '3':
                        readable[1] = ' thirty';
                        break;
                    case '4':
                        readable[1] = ' forty';
                        break;
                    case '5':
                        readable[1] = ' fifty';
                        break;
                    case '6':
                        readable[1] = ' sixty';
                        break;
                    case '7':
                        readable[1] = ' seventy';
                        break;
                    case '8':
                        readable[1] = ' eighty';
                        break;
                    case '9':
                        readable[1] = ' ninety';
                        break;
                    case '0':
                        readable[1] = '';
                        break;
                }

                switch (read[2]) {
                    case '1':
                        readable[2] = ' one';
                        break;
                    case '2':
                        readable[2] = ' two';
                        break;
                    case '3':
                        readable[2] = ' three';
                        break;
                    case '4':
                        readable[2] = ' four';
                        break;
                    case '5':
                        readable[2] = ' five';
                        break;
                    case '6':
                        readable[2] = ' six';
                        break;
                    case '7':
                        readable[2] = ' seven';
                        break;
                    case '8':
                        readable[2] = ' eight';
                        break;
                    case '9':
                        readable[2] = ' nine';
                        break;
                    case '0':
                        readable[2] = '';
                        break;
                }
            }
        }

        if ( read.length == 2 ) {
            if ( read[0] == 1) {
                switch (read[1]) {
                    case '1':
                        readable[0] = 'eleven';
                        break;
                    case '2':
                        readable[0] = 'twelve';
                        break;
                    case '3':
                        readable[0] = 'thirteen';
                        break;
                    case '4':
                        readable[0] = 'fourteen';
                        break;
                    case '5':
                        readable[0] = 'fifteen';
                        break;
                    case '6':
                        readable[0] = 'sixteen';
                        break;
                    case '7':
                        readable[0] = 'seventeen';
                        break;
                    case '8':
                        readable[0] = 'eighteen';
                        break;
                    case '9':
                        readable[0] = 'nineteen';
                        break;
                    case '0':
                        readable[0] = 'ten';
                        break;
                }                  
            } else {
                switch (read[0]) {
                    case '2':
                        readable[0] = 'twenty';
                        break;
                    case '3':
                        readable[0] = 'thirty';
                        break;
                    case '4':
                        readable[0] = 'forty';
                        break;
                    case '5':
                        readable[0] = 'fifty';
                        break;
                    case '6':
                        readable[0] = 'sixty';
                        break;
                    case '7':
                        readable[0] = 'seventy';
                        break;
                    case '8':
                        readable[0] = 'eighty';
                        break;
                    case '9':
                        readable[0] = 'ninety';
                        break;
                }

                switch (read[1]) {
                    case '1':
                        readable[1] = ' one';
                        break;
                    case '2':
                        readable[1] = ' two';
                        break;
                    case '3':
                        readable[1] = ' three';
                        break;
                    case '4':
                        readable[1] = ' four';
                        break;
                    case '5':
                        readable[1] = ' five';
                        break;
                    case '6':
                        readable[1] = ' six';
                        break;
                    case '7':
                        readable[1] = ' seven';
                        break;
                    case '8':
                        readable[1] = ' eight';
                        break;
                    case '9':
                        readable[1] = ' nine';
                        break;
                    case '0':
                        readable[1] = '';
                        break;
                }
            }
        }

        if ( read.length == 1 ) {
            switch (read[0]) {
                case '1':
                    readable[0] = 'one';
                    break;
                case '2':
                    readable[0] = 'two';
                    break;
                case '3':
                    readable[0] = 'three';
                    break;
                case '4':
                    readable[0] = 'four';
                    break;
                case '5':
                    readable[0] = 'five';
                    break;
                case '6':
                    readable[0] = 'six';
                    break;
                case '7':
                    readable[0] = 'seven';
                    break;
                case '8':
                    readable[0] = 'eight';
                    break;
                case '9':
                    readable[0] = 'nine';
                    break;
                case '0':
                    readable[0] = 'zero';
                    break;
            }
        }
    }

    return readable.join('');
        
}
