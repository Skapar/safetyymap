from bs4 import BeautifulSoup
import os

# Paths for HTML files and Django app's templates directory
html_files_path = "SafetyFirst/templates"
django_templates_path = "SafetyFirst/templates1"

# Function to update URLs in HTML files
def update_html_files(html_dir, template_dir):
    for root, dirs, files in os.walk(html_dir):
        for file in files:
            if file.endswith(".html"):
                with open(os.path.join(root, file), "r") as html_file:
                    html_content = html_file.read()

                soup = BeautifulSoup(html_content, "html.parser")
                script_and_link_tags = soup.find_all(["script", "link"])

                for tag in script_and_link_tags:
                    if tag.has_attr("src"):
                        src = tag.get("src")
                        if not src.startswith("{% static '"):
                            tag["src"] = "{{% static '{}'%}}".format(src)
                    if tag.has_attr("href"):
                        href = tag.get("href")
                        if not href.startswith("{% static '"):
                            tag["href"] = "{{% static '{}'%}}".format(href)

                # Update the HTML content
                updated_html_content = str(soup)

                # Write the updated content to the Django template file
                template_file_path = os.path.join(template_dir, file)
                with open(template_file_path, "w") as template_file:
                    template_file.write(updated_html_content)

# Update URLs in HTML files within the specified directory
update_html_files(html_files_path, django_templates_path)
