import * as QRCode from 'qrcode';
import * as fs from 'fs';

// Falta define um metodo mais preciso para as cores
function selectQRcolor(chooseColor: string):'#0000FF'|'#000'| '#8B0000'|'#DDA0DD'{
    switch (chooseColor){
        case 'blue':
            return '#0000FF';
        case 'yellow':
            return  '#000';
        case 'red':
            return '#8B0000';
        case 'pink':
            return '#DDA0DD';
        default:
            return '#000';
    }
}

const generatorQRCode = async (data: string, filePath: string, escolherDark: string, escolherLight: string):Promise<void> => {
    try{
        const qrCodeBuffer = await  QRCode.toBuffer(data, {
            color: {
                dark: selectQRcolor(escolherDark),
                light: selectQRcolor(escolherLight)
            }
        });
        fs.writeFileSync(filePath, qrCodeBuffer);
        console.log('Qr Code Gerado com sucesso');
    } catch (erro){
        console.log('Erro ao gerar o Qr code:', erro);
    }
}
// Testando QRCODE
const link = 'https://pudim.com.br/';
const arquivo = 'qr2.png';
generatorQRCode(link, arquivo, 'blue','pink');