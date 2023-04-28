# syntax=docker/dockerfile:1

FROM 192.168.0.147:5000/shared

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_RUN_PORT 4002

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4002"]

EXPOSE 4002
