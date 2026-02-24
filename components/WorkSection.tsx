import { TimeLine } from '@/components/TimeLine/TimeLine'
import { TimeLineCard } from '@/components/TimeLine/TimeLineCard'

export function WorkSection() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div
                className="
                    text-4xl font-bold tracking-tight
                    text-white
                  "
            >
                Professional Background
            </div>
            <div id="work">
                <TimeLine>
                    <TimeLineCard
                        title="Working Student - Software Development"
                        institution="ISO Software Systeme GmbH"
                        description={
                            <ul>
                                <li>
                                    Developed and conceptualized the Vue.js
                                    frontend for an airport management software
                                    and its models.
                                </li>
                                <li>
                                    Led the full-stack development of SKYport
                                    Maps, a map-based airport software. Utilized
                                    Jakarta EE, REST, GeoJSON, and Vue.js for
                                    development, and integrated real- time
                                    position data via ADS-B transponders.
                                </li>
                                <li>
                                    Upgraded infrastructure using Jakarta EE
                                    technologies such as Wildfly, Apache Camel,
                                    and various librarie
                                </li>
                                <li>
                                    Managed backend development within a JavaEE
                                    context.
                                </li>
                            </ul>
                        }
                        duration="March 2022 - June 2024"
                    />
                    <TimeLineCard
                        title="Working Student - Software Development"
                        institution="ISO Public Services GmbH"
                        description={
                            <ul>
                                <li>
                                    Acted as Student Lead in the Scrum process,
                                    coordinating team activities and supporting
                                    strategic planning to align development
                                    efforts with project goals.
                                </li>
                                <li>
                                    Designed and implemented a React/Redux
                                    frontend for the company’s internal portal
                                    and its apps
                                </li>
                                <li>
                                    Developed and extended Atlassian Jira
                                    plugins using Spring Boot, enhancing project
                                    management workflows and supporting custom
                                    business requirements.
                                </li>
                                <li>
                                    Contributed to the deployment and
                                    maintenance of the internal portal, using
                                    k3s, Docker, and containerized services to
                                    improve reliability and scalability while
                                    meeting security requirements.
                                </li>
                            </ul>
                        }
                        duration="July 2024 - "
                    />
                </TimeLine>
            </div>
        </div>
    )
}
