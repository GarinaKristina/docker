# Используйте официальный образ Jenkins
FROM jenkins/jenkins:lts


# Копируйте конфигурационные файлы Jenkins (если нужно)
COPY jenkins-configuration/ /var/jenkins_home/

# Выставите порт
EXPOSE 8080

# Запускайте Jenkins
CMD ["jenkins"]

# Jenkins initial setup is required. An admin user has been created and a password generated.
# Please use the following password to proceed to installation:

# 3cc42637ee8b44b598636f974594673f

# This may also be found at: /var/jenkins_home/secrets/initialAdminPassword