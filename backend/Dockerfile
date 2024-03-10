FROM tensorflow/tensorflow:latest

RUN pip install \
    tensorflow-hub \
    matplotlib \
    numpy \
    pillow \
    fastapi \
    uvicorn

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]