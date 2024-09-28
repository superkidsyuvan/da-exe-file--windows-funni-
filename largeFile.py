import os

# List all files and directories and subdirectories in the current directory
for subdir, dirs, files in os.walk("."):
    for file in files:
        file_path = subdir + os.sep + file
        if(os.path.getsize(file_path)>=104857600):
            #check if file is above github blocking limit of 100Mib and add such files in a gitIgnore
            f = open(".gitignore", "a")
            f.write(file_path+"\n")
            f.close()
            print(file_path)
