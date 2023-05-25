# Executar:

#        uvicorn conexao:app --reload


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins=[
    "http://127.0.0.1:5500",
    "http://127.0.0.1:5501",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class FormArgs(BaseModel):
    name: str
    mail: str
    cellphone: str
    brithdate: str
    senha: str
    level: str

@app.post('/conexao/')
async def dados(item: FormArgs):
    return item



def main():
    import uvicorn
    uvicorn.run('conexao:app', port=5500, log_level='info', reload=True)
    
if __name__== '__main__':
    main()    