package library.modules.config.root;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({"library.modules.app.security"})
public class RootContextConfig {

}
