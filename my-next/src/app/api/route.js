export const dynamic = 'force-dynamic'
export async function POST(){
    let data = [
        {
            'npm' : '00010001',
            'nama' : 'Fatimah'
        },
        {
            'npm' : '00020002',
            'nama' : 'Wilfrida'
        },
    ];

    return Response.json(data);

}