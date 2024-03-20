# Используйте официальный образ Jenkins
FROM jenkins/jenkins:lts

# Отключите установку плагинов во время сборки
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false

# Копируйте конфигурационные файлы Jenkins (если нужно)
COPY jenkins-config/ /var/jenkins_home/

# Установите необходимые плагины (пример)
RUN /usr/local/bin/install-plugins.sh git matrix-auth workflow-aggregator docker-workflow blueocean credentials-binding

# Выставите порт
EXPOSE 8080

# Запускайте Jenkins
CMD ["jenkins"]
